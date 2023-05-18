namespace GreenOnSoftware.Commons.Consts;

public static class Role
{
    public readonly static string[] All = new[] { Admin, ContentEditor, GeneralUser };

    public const string Admin = "Admin";
    public const string ContentEditor = "ContentEditor";
    public const string GeneralUser = "GeneralUser";
}