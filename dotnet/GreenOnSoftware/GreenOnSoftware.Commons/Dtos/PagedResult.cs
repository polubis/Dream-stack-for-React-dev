namespace GreenOnSoftware.Commons.Dtos;

public class PagedResult<T> : Result<IEnumerable<T>>
{
    public int ItemsPerPage { get; private set; }
    public int TotalPages { get; private set; }
    public int CurrentPage { get; private set; }
    public int CurrentPageItemsNumber { get; private set; }

    public void SetData(IEnumerable<T> items, int itemsPerPage, int currentPage, int currentPageItemsNumber, int totalPages)
    {
        SetData(items);
        ItemsPerPage = itemsPerPage;
        CurrentPage = currentPage;
        TotalPages = totalPages;
        CurrentPageItemsNumber = currentPageItemsNumber;
    }
}


