using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Articles.SendForApprovalCommand;

public record SendForApproval(Guid Id) : IRequest<Result>;
