namespace WebApi.Models.Users;
public class UserLoginModel
{
    public required string Email { get; set; }
    public required string Password { get; set; }
}