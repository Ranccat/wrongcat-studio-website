using Microsoft.AspNetCore.Mvc;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;
    private readonly UserService _userService;

    public UserController(ILogger<UserController> logger, UserService userService)
    {
        _logger = logger;
        _userService = userService;
    }

    // POST /api/user/register
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
    {
        if (ModelState.IsValid == false)
        {
            return BadRequest(ModelState);
        }

        try
        {
            var result = await _userService.RegisterAsync(registerDto);
            if (result.IsSuccess == false)
            {
                return Conflict(new { message = result.ErrorMessage });
            }
        }
        catch (Exception e)
        {
            Console.WriteLine("Error :: " + e);
        }
        
        return Ok(new { mesage = "Registration successful" });
    }
}
