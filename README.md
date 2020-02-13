# Clean Backend TS Starter Kit

## Quickstart

```sh
npm i

# in another shell window :
npm run watch # will run tests and compile the code
```

## Testing

```sh
npm run test:watch unit # for watching unit tests
```

## Generating code

We use Hygen to generate code and attached unit tests. You must install Hygen globaly first:

```sh
npm i -g hygen
```

Then you can use the following commands to either create a Usecase, a Service, a Vendor or an Entity.

```sh
hygen usecase new # Will generate all files for your usecase

hygen service new # ------------------- service

hygen entity new # -------------------- entity

hygen vendor new # -------------------- vendor
```

TODO: add more info.
TODO: Create a global presenter the usecase can extends
