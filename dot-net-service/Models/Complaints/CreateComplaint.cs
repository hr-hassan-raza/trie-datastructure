namespace WebApi.Models;
using WebApi.Entities;

public class CreateComplaint
{
    public required string ProductName { get; set; }
    public required string Description { get; set; }
    public required int UserId { get; set; }
    public required ComplaintStatus Status { get; set; }
}