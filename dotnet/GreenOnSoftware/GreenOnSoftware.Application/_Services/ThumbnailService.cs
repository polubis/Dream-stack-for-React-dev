using GreenOnSoftware.Application.Account.SignInCommand;
using GreenOnSoftware.Application.Services.Interfaces;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Resources;
using Microsoft.AspNetCore.Http;
using System.Drawing;

namespace GreenOnSoftware.Application.Services;

public class ThumbnailService : IThumbnailService
{
    private readonly IBlobStorageService _blobStorageService;

    public ThumbnailService(IBlobStorageService blobStorageService)
    {
        _blobStorageService = blobStorageService;
    }

    public async Task<Result<string>> UploadPicture(IFormFile pictureFile)
    {
        var result = new Result<string>();

        var pictureMemoryStreamResult = await ValidatePictureFile(pictureFile);
        if (pictureMemoryStreamResult.HasErrors)
        {
            result.AddErrors(pictureMemoryStreamResult);
            return result;
        }

        string fileExtension = Path.GetExtension(pictureFile.FileName);
        var uploadResult = await _blobStorageService.UploadPictureAsync(pictureMemoryStreamResult.Data, fileExtension);
        if (uploadResult.HasErrors)
        {
            result.AddErrors(uploadResult);
            return result;
        }

        result.SetData(uploadResult.Data);

        return result;
    }

    private async Task<Result<MemoryStream>> ValidatePictureFile(IFormFile file)
    {
        var result = new Result<MemoryStream>();

        if (file is null || file.Length == 0)
        {
            result.AddError(ErrorMessages.PictureFileEmpty);
            return result;
        }

        if (file.Length > 1024 * 1024 * 5)
        {
            result.AddError(ErrorMessages.PictureSizeTooBig);
            return result;
        }

        string fileExtension = Path.GetExtension(file.FileName);

        if (!new[] { ".jpg", ".jpeg", ".png", ".svg" }.Contains(fileExtension))
        {
            result.AddError(ErrorMessages.InvalidFileFormat);
            return result;
        }

        var memoryStream = new MemoryStream();

        await file.CopyToAsync(memoryStream);

        if (fileExtension == ".svg")
        {
            memoryStream.Position = 0;
            result.SetData(memoryStream);
            return result;
        }

        try
        {
            using (var img = Image.FromStream(memoryStream))
            {
                if (img.Width > 2000 || img.Height > 2000)
                {
                    result.AddError(ErrorMessages.PictureWidthOrHeightTooBig);
                    return result;
                }

                memoryStream.Position = 0;
                result.SetData(memoryStream);

                return result;
            }
        }
        catch
        {
            result.AddError(ErrorMessages.InvalidFileFormat);
            return result;
        }

    }
}