namespace GreenOnSoftware.Commons.Helpers;

public static class EnvironmentHelper
{
    public static bool IsDevOrLocal()
    {
        string env = GetCurrentEnvironment();

        return env == "dev" || env == "Development";
    }

    private static string GetCurrentEnvironment()
    {
        return Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")!;
    }
}
