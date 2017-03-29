# airline-checkin
An example AngularJS application that consists of a frontend and a backend.

## Installation

Clone the repository
```sh
git clone git@github.com:dashersw/airline-checkin.git
```

Install dependencies
```sh
cd airline-checkin
npm install
```

## Running
### The API server
Run the API server with the following:
```
cd api
node index.js
```

The server will start listening on port 8000.

### The frontend
Run the development server with auto-reload in another terminal:
```
cd airline-checkin
gulp
```

Now the application will be available on `http://localhost:42000`.

## License

MIT License

Copyright (c) 2017 Armagan Amcalar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
