namespace WebApi.Entities;
public class Complaint
{
    public int Id { get; set; }
    public required int ProductId { get; set; }
    public required string Description { get; set; }
    public required int UserId { get; set; }
    public required ComplaintStatus Status { get; set; }

    public User User { get; set; }
    public Product Product { get; set; }
}