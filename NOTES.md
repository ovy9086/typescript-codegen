GraphQL :

- show the examples/schema.graphql
- show Manual.tsx
  - how a query is built
  - maybe show autocompletion, a nice feature of GQL tooling
  - showcase how by default the response is any
  - show how with maintained types we are better, as the result is typed
  - delete some properties from GQL but not from our own type
  - now we can run into problems

-show Codegen.tsx

- show how we no longer need to manually define our type
- show how this code is generated in the genrated file
- run the codegen command
- run the command --watch
- show how type is automatically updated as we change the query

OpenAPI :

- show simple local schema : examples/openapi.yaml | json
- run 'yarn dev' and show the swagger docs based on this at : http://localhost:3000/docs
- update the route.ts @openapi doc and add a backupEmail property
- run yarn generate-schema to update the schema
- redeploy and open the swagger docs
- showcase page.tsx and how we fetch data and import the type from schema.d.ts
- regenerate schema.d.ts
- access .backupEmail from code in page.tsx
- update schema and delete backupEmail from @openapi and re-generate everything

A good remote example to check ->
Swagger Docs : https://petstore3.swagger.io/
Available Schema : https://petstore3.swagger.io/api/v3/openapi.json | https://petstore3.swagger.io/api/v3/openapi.yaml

Code Showcase:
