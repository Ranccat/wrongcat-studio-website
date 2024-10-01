using Microsoft.EntityFrameworkCore;

public class UserService
{
    private readonly ApplicationDbContext _context;

    public UserService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<(bool IsSuccess, string ErrorMessage)> RegisterAsync(RegisterDto registerDto)
    {
        bool isUserIdTaken = await _context.Users.AnyAsync(u => u.UserId == registerDto.UserId);
        if (isUserIdTaken)
        {
            return (false, "The ID is already taken.");
        }

        bool isNicknameTaken = await _context.Users.AnyAsync(u => u.Nickname == registerDto.Nickname);
        if (isNicknameTaken)
        {
            return (false, "The Nickname is already taken.");
        }

        bool isEmailTaken = await _context.Users.AnyAsync(u => u.Email == registerDto.Email);
        if (isEmailTaken)
        {
            return (false, "The Email is already in use.");
        }

        DateTime currentDateTime = DateTime.UtcNow;
        var user = new User
        {
            UserId = registerDto.UserId,
            Password = registerDto.Password,
            Email = registerDto.Email,
            Nickname = registerDto.Nickname,
            ProfileImageUrl = null,
            Bio = null,
            LastLogin = currentDateTime,
            CreatedAt = currentDateTime
        };

        user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);

        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();

        return (true, string.Empty);
    }
}
