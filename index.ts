import Table from "cli-table"
import type { Application } from "express"

interface RoutesArray {
    no: number
    method: string,
    path: string,
    keys: string[],
}

export default function RegisteredRoutes(app : Application) : void {
    const table = new Table({ head: ["#","METHOD", "PATH", "PARAMS"] ,style : { head : ['cyan'] } })
    let routes = [] as RoutesArray[]
    app._router.stack.forEach((r,i) => {
      if (r.route) {
        const path = r.route.path
        const method = r.route.stack[0].method.toUpperCase()
        const keys = r.keys.map(k => k.name)
        routes.push({
            no : routes.length + 1,
            method,
            path,
            keys
        }) 
      }
    })
     routes.forEach(r => {
        table.push( [
             r['no'],
             r.method,
             r.path,
             r.keys ,
        ])
    })
    console.log(table.toString())
}
