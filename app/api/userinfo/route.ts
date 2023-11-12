/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - email
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         firstName:
 *           type: string
 *           example: John
 *         lastName:
 *           type: string
 *           example: Doe
 *         email:
 *           type: string
 *           format: email
 *           example: johndoe@mail.co
 */

/**
 * @openapi
 * /api/userinfo:
 *   get:
 *     summary: Get user information
 *     description: Retrieves details about a user.
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
export async function GET(request: Request) {
  return Response.json({
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@mail.co",
  });
}
