import { PrismaClient } from '@prisma/client'
import { singleton } from 'tsyringe'

const client = new PrismaClient()
