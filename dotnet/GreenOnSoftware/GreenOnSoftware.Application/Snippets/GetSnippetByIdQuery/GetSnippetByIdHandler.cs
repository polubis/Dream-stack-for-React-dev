using AutoMapper;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Core.Enums;
using GreenOnSoftware.Core.Models;
using GreenOnSoftware.Core.Models.Snippets;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace GreenOnSoftware.Application.Snippets.GetSnippetByIdQuery;

internal sealed class GetSnippetByIdHandler : IRequestHandler<GetSnippetById, Result>
{
    private readonly GreenOnSoftwareDbContext _context;
    private readonly IMapper _mapper;

    public GetSnippetByIdHandler(GreenOnSoftwareDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<Result> Handle(GetSnippetById query, CancellationToken cancellationToken)
    {
        var result = new Result<SnippetDto>();
        var snippet = await _context.Set<Snippet>().FirstOrDefaultAsync(x=>x.Id == query.Id);

        if (snippet == null)
        {
            result.AddError("Snippet not found");
            return result;
        }

        result.SetData(_mapper.Map<SnippetDto>(snippet));

        return result;
    }
}