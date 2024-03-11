namespace WebApi.Models.Complaints;
using WebApi.Entities;

public class UpdateRequest
{
    public required ComplaintStatus Status { get; set; }
}