using System.Linq.Expressions;

namespace GreenOnSoftware.Commons.Extensions;

public static class QueryableExtensions
{
    public static IQueryable<T> Where<T>(this IQueryable<T> entities, Func<bool> condition, Expression<Func<T, bool>> predicate) 
        where T: class
    {
        return condition() ? entities.Where(predicate) : entities;
    }
}

