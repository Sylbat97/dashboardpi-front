export interface Cpu {
    Usage: number,
    Temp: number
}

export function getCpuData(): Promise<Cpu> {
    return fetch('http://192.168.0.14:10000/CPU', {
            method: 'GET'
            //Request Type 
    })
            // the JSON body is taken from the response
            .then(res => res.json())
            .then(res => {
                    // The response has an `any` type, so we need to cast
                    // it to the `User` type, and return it from the promise
                    return res as Cpu
            })
}
