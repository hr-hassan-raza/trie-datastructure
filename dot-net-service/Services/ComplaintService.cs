namespace WebApi.Services.Complaints;

using Microsoft.EntityFrameworkCore;
using WebApi.Entities;
using WebApi.Helpers;
using WebApi.Models;
using WebApi.Models.Complaints;
public interface IComplaintService
{
    IEnumerable<Complaint> GetAll();
    Complaint GetById(int id);
    void Create(CreateComplaint model);
    void Update(int id, UpdateRequest model);
}

public class ComplaintService(
    DataContext context) : IComplaintService
{
    private readonly DataContext _context = context;

    public IEnumerable<Complaint> GetAll()
    {
        return _context.Complaints
        .Include(complaint => complaint.User)  // Eager load User entity
        .Include(complaint => complaint.Product);
    }

    public Complaint GetById(int id)
    {
        return GetComplaint(id);
    }

    public void Create(CreateComplaint model)
    {
        var product = _context.Products.FirstOrDefault(p => p.Name == model.ProductName) ?? throw new KeyNotFoundException("Product not found");
        var user = _context.Users.Find(model.UserId) ?? throw new KeyNotFoundException("Product not found"); ;
        Complaint complaint = new()
        {
            ProductId = product.ProductId,
            Description = model.Description,
            UserId = model.UserId,
            Status = model.Status,
            Product = product,
            User = user

        };
        _context.Complaints.Add(complaint);
        _context.SaveChanges();
    }

    // helper methods

    private Complaint GetComplaint(int id)
    {
        var complaint = _context.Complaints.Find(id) ?? throw new KeyNotFoundException("Complaint not found");
        return complaint;
    }

    public void Update(int id, UpdateRequest model)
    {
        var complaint = GetComplaint(id);
        complaint.Status = model.Status;
        _context.Complaints.Update(complaint);
        _context.SaveChanges();
    }
}