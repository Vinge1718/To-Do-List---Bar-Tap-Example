"use strict";
var Task = (function () {
    function Task(description, priority, category) {
        this.description = description;
        this.priority = priority;
        this.category = category;
        this.done = false;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.model.js.map