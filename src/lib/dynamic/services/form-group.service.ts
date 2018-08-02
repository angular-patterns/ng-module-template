import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable()
export class FormGroupService {
    value: any;
    setValue(value: any) {
        this.value = value;
    }
    getPath(formGroup: FormGroup) {
        var path = [];
        var current = formGroup;
        var parent = formGroup.parent as FormGroup;
        while (parent) {
            
            for (var t in parent.controls) {
                if (parent.controls[t] == formGroup) {
                    path.push(t);
                    current =  parent;
                    parent = current.parent as FormGroup;
                }

            }
        }
        return path.reverse();
    }
    getGroup(formGroup: FormGroup) {
        if (this.value) {
            var path = this.getPath(formGroup);
            return this.deepFind(this.value, path.join('.')) || this.value;
        }
        return this.value;
    }
    getValue(formGroup: FormGroup, property: string) {
        var group = this.getGroup(formGroup) || {};
        return group[property];
    }

    deepFind(obj, path) {
        var paths = path.split('.')
            , current = obj
            , i;

        for (i = 0; i < paths.length; ++i) {
            if (current[paths[i]] == undefined) {
            return undefined;
            } else {
            current = current[paths[i]];
            }
        }
        return current;
    }

}