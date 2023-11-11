export async function GET(request: Request) {
  return Response.json({ id: 1, firstName: "John", lastName: "Doe", email: "johndoe@mail.co" });
}
