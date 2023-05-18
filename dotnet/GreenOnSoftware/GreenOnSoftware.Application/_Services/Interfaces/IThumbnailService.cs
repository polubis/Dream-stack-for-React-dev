using GreenOnSoftware.Commons.Dtos;
using Microsoft.AspNetCore.Http;

namespace GreenOnSoftware.Application.Services.Interfaces;

public interface IThumbnailService
{
    Task<Result<string>> UploadPicture(IFormFile pictureFile);
}