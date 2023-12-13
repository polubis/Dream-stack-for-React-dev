namespace GreenOnSoftware.Application.GithubAuthentication;

public class GithubTokenDto
{
    public string AccessToken { get; set; }
    public IEnumerable<string> Scope { get; set; }
}