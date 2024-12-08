import { ListTablesCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { 
    UpdateCommand, 
    PutCommand, 
    DynamoDBDocumentClient, 
    ScanCommand, 
    DeleteCommand 
} from "@aws-sdk/lib-dynamodb";
import crypto from "crypto";

const client = new DynamoDBClient({ region: "us-east-2"});
const docClient = DynamoDBDocumentClient.from(client);

export const fetchTasks = async () => {
    const command = new ScanCommand({
        ExpressionAttributeNames: { "#name": "name" },
        ProjectionExpression: "id, #name, completed",
        TableName: "Tasks"
    });

    const response = await docClient.send(command);

    return response;
}

export const createTask = async ({name, completed}) => {
    const uuid = crypto.randomUUID()
    const command = new PutCommand({
        TableName: "Tasks",
        Item: {
            id: uuid,
            name,
            completed,
        }
    })

    const response = await docClient.send(command);

    return response;
}

export const updateTask = async ({id, name, completed}) => {
    const command = new UpdateCommand({
        TableName: "Tasks",
        Key: {
            id
        },
        ExpressionAttributeNames: {
            "#name": "name"
        },
        UpdateExpression: "set #name = :n, completed = :c",
        ExpressionAttributeValues: {
            ":n": name,
            ":c": completed
        },
        ReturnValues: "ALL_NEW"
    });

    const response = await docClient.send(command);

    return response;
}

export const deleteTask = async (id) => {
    const command = new DeleteCommand({
        TableName: "Tasks",
        Key: {
            id
        }
    })

    const response = await docClient.send(command);

    return response;
}