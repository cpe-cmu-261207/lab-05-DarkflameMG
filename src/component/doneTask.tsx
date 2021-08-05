type Donelist = {
    list: string;
}

const doneTask = ({ list }: Donelist) => {
    <div className="flex justify-between h-8 items-center py-6 border-b group bg-white">
        <u className="text-2xl" > {list}</u>
    </div>
}

export default doneTask