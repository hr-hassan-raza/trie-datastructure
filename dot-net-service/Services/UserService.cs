namespace WebApi.Services.Users;

using Microsoft.EntityFrameworkCore;
using WebApi.Entities;
using WebApi.Helpers;
using WebApi.Models.Users;

public interface IUserService
{
    IEnumerable<User> GetAll();
    User GetById(int id);
    void Create(User model);
    void Delete(int id);
    Task<User> Login(UserLoginModel loginModel);
}

public class UserService : IUserService
{
    private DataContext _context;

    public UserService(
        DataContext context)
    {
        _context = context;
    }

    public IEnumerable<User> GetAll()
    {
        return _context.Users;
    }

    public User GetById(int id)
    {
        return getUser(id);
    }

    public void Create(User model)
    {
        if (_context.Users.Any(x => x.Email == model.Email))
            throw new AppException("User with the email '" + model.Email + "' already exists");
        var user = model;
        _context.Users.Add(user);
        _context.SaveChanges();
    }

    public void Delete(int id)
    {
        var user = getUser(id);
        _context.Users.Remove(user);
        _context.SaveChanges();
    }

    // helper methods

    private User getUser(int id)
    {
        var user = _context.Users.Find(id) ?? throw new KeyNotFoundException("User not found");
        return user;
    }

    public async Task<User> Login(UserLoginModel loginModel)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == loginModel.Email && u.Password == loginModel.Password);
        if (user == null) throw new KeyNotFoundException("User not found");
        return user;

    }
}