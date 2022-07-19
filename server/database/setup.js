import client from './config.js'
import { createUserTable } from './tables/createUserTable.js'

createUserTable(client)