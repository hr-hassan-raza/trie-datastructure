namespace WebApi.Entities;


public class Product
{
    public int ProductId { get; set; }
    public required string Name { get; set; }
    public ICollection<Complaint>? Complaints { get; set; }
}