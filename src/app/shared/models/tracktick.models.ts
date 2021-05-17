export type Site = {
        "id": string,
        "clientId": string,
        "title": string,
        "createdAt": string,
        "updatedAt": string,
        "contacts": {
          "main": {
            "id": string,
            "firstName": string,
            "lastName": string,
            "email": string,
            "phoneNumber": string,
            "jobTitle": string,
            "address": Address
          }
        },
        "address": Address,
        "images": string[],
        "tags": string[]
}

export type Address = {
    "zipCode": string,
    "city": string,
    "street": string,
    "country": string,
    "state": string
}