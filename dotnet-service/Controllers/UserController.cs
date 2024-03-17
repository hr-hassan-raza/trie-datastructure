namespace WebApi.Controllers;

using Microsoft.AspNetCore.Mvc;
using WebApi.Services.Users;
using WebApi.Entities;
using WebApi.Models.Users;

[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase
{
    private IUserService _userService;

    public UsersController(
        IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var users = _userService.GetAll();
        return Ok(users);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var user = _userService.GetById(id);
        return Ok(user);
    }

    [HttpPost]
    public IActionResult Create(User model)
    {
        _userService.Create(model);
        return Ok(new { message = "User created" });
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _userService.Delete(id);
        return Ok(new { message = "User deleted" });
    }

    [HttpPost("login")]
    public async Task<ActionResult<User>> GetUserByEmailAndPassword(UserLoginModel loginModel)
    {
        var user = await _userService.Login(loginModel);
        return Ok(user);
    }
}