export default class StudentRoaster {

    students = {};

    add(grade: number, name: string) {
        if (!this.students.hasOwnProperty(grade)) {
            this.students[grade] = [];
        }

        this.students[grade].push(name);
    }

    getAllSortedList() {
        // sort keys
        let sortedList = Object.keys(this.students).sort().reduce((r, k) => (r[k] = this.students[k], r), {});

        // sort
        for (let key in sortedList) {
            sortedList[key].sort((a, b) => { var x = a.name, y = b.name; return x === y ? 0 : x < y ? -1 : 1; })
        }

        return sortedList;
    }

    getByGrades(grade: number): string[] {
        if (this.students.hasOwnProperty(grade)) {
            return this.students[grade];
        }

        return null;
    }

}