import { main as sharedMain } from '@app/shared'

export function main() {
    console.log('THIS IS BACKEND ' + sharedMain())
}

main()