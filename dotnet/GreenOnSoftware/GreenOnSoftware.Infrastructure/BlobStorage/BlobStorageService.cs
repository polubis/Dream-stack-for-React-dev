using Azure.Storage.Blobs;
using GreenOnSoftware.Application.Services.Interfaces;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Resources;
using Microsoft.Extensions.Options;

namespace GreenOnSoftware.Infrastructure.BlobStorage;

public class BlobStorageService: IBlobStorageService
{
    private readonly BlobStorageConfiguration _config;

    public BlobStorageService(IOptions<BlobStorageConfiguration> options)
    {
        _config = options.Value;
    }

    public async Task<Result<string>> UploadPictureAsync(MemoryStream pictureFileStream, string fileExtension)
    {
        var result = new Result<string>();
        try
        {
            var serviceClient = new BlobServiceClient(_config.ConnectionString);
            BlobContainerClient containerClient = serviceClient.GetBlobContainerClient(_config.Container);
            BlobClient blobClient = containerClient.GetBlobClient(GenerateFileName(fileExtension));
            var blobUri = blobClient.Uri.ToString();

            await blobClient.UploadAsync(pictureFileStream, true);
            pictureFileStream.Close();
            await pictureFileStream.DisposeAsync();

            result.SetData(blobUri);

            return result;
        }
        catch (Exception ex)
        {
            result.AddErrorWithLogging(ex, ErrorMessages.UploadPictureError);
            return result;
        }
    }

    public async Task<Result> RemovePictureFromStorageAsync(string path)
    {
        var result = new Result<string>();
        try
        {
            var serviceClient = new BlobServiceClient(_config.ConnectionString);
            BlobContainerClient containerClient = serviceClient.GetBlobContainerClient(_config.Container);

            await containerClient.DeleteBlobIfExistsAsync(Path.GetFileName(path));

            return result;
        }
        catch (Exception ex)
        {
            result.AddErrorWithLogging(ex, ErrorMessages.RemovePictureError);
            return result;
        }
    }

    private string GenerateFileName(string fileExtension)
    {
        string filename = Path.GetFileNameWithoutExtension(Path.GetTempFileName());

        return $"{filename}_{DateTime.Now:yyyyMMddHHmmssf}{fileExtension}";
    }
}
