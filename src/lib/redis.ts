import { Client, Entity, Schema, Repository } from 'redis-om'

const client = new Client()

async function connect() {
    if (!client.isOpen()) {
        await client.open(process.env.REDIS_URL)
    }
}

class Universities extends Entity {}

const schema = new Schema(Universities, {
    title: { type: 'string', },
    description: { type: 'string' },
    image: { type: 'string' },
    majors: {type: 'number'}},
    {dataStructure: 'JSON'}
)

// export async function createUniversityRepository() {
//     await connect()

//     const repository = client.fetchRepository(schema)

//     return repository
// }
// export async function createUniversity(
//     repository: Repository<Universities>,
//     university: Universities
// ) {
   
    
    
//     await repository.save(university)
// }

export async function createUniversity(
    data: any) {
    await connect()

    const repository = client.fetchRepository(schema)

    const university = repository.createEntity(data)

    await repository.save(university)
}

export async function getUniversity(
    repository: Repository<Universities>,
    id: string
) {
    return await repository.fetch(id)
}

export async function getAllUniversities(
    repository: Repository<Universities>
) {
    return await repository.search()
}