// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type SampleProps = Omit<Sample, NonNullable<FunctionPropertyNames<Sample>>>;

export class Sample implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public field1?: string;

    public field2?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Sample entity without an ID");
        await store.set('Sample', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Sample entity without an ID");
        await store.remove('Sample', id.toString());
    }

    static async get(id:string): Promise<Sample | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Sample entity without an ID");
        const record = await store.get('Sample', id.toString());
        if (record){
            return Sample.create(record as SampleProps);
        }else{
            return;
        }
    }



    static create(record: SampleProps): Sample {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new Sample(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
