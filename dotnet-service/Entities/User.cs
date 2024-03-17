namespace WebApi.Entities;
public class User
{
    public int UserId { get; set; }
    public required string Name { get; set; }
    public required string Email { get; set; }
    public required Role Role { get; set; }
    public required string Password { get; set; }

    public ICollection<Complaint>? Complaints { get; set; }
}