import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api(tags = "User Operations")
@RestController
@RequestMapping("/api")
public class UserController {

    @ApiOperation(value = "Get user information", notes = "Retrieves details about a user.")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Successful response", response = User.class),
        @ApiResponse(code = 404, message = "User not found", response = ErrorResponse.class)
    })
    @GetMapping("/userinfo")
    public ResponseEntity<User> getUserInfo() {
        User user = new User();
        user.setId(1L);
        user.setFirstName("John");
        user.setLastName("Doe");
        user.setEmail("johndoe@mail.co");
        return ResponseEntity.ok(user);
    }
}
