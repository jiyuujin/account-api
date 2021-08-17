# Account API

Save the household account book in a spreadsheet

### GET API

Try to use the curl command

```bash
curl -L <SPREADSHEET_API>
```

#### Postman

![](https://i.imgur.com/VSRUUb0.jpg)

### POST

Try to use the curl command

```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{ "date": "2021-08-17", "cost": "100", "type": "1", "detail": "", "amount": "30000" }' <SPREADSHEET_API>
```

#### Postman

![](https://i.imgur.com/EQM6QVK.jpg)

## `gas-tutorial` template used

Confirm `src/appsscript.json`. Next, you set environment config. Run `cp .env.example .env`, input environmental values. Serve in Google Developers Console.

```bash
yarn deploy
```
