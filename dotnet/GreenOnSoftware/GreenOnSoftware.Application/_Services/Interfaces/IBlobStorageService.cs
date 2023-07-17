using GreenOnSoftware.Commons.Dtos;

namespace GreenOnSoftware.Application.Services.Interfaces;

public interface IBlobStorageService
{
    Task<Result> RemovePictureFromStorageAsync(string path);
    Task<Result<string>> UploadPictureAsync(MemoryStream pictureFileStream, string fileExtension);
}
