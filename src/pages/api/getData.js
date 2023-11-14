// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let data = {
    0: {
        "id": 0,
        "name": "John Doe",
        "age": 20
    },
    1: {
        "id": 1,
        "name": "Jane Doe",
        "age": 24
    },
    2: {
        "id": 2,
        "name": "John Smith",
        "age": 25
    },
}

export default function handler(req, res) {
  res.status(200).json(data[req.query.id])
}