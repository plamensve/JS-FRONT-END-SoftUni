function solve(information) {
    let members = Number(information.shift());
    let nameRole = {};
    let nameSkills = {};

    for (let i = 0; i < members; i++) {
        let [name, role, skillsStr] = information[i].split(' ');
        let skills = skillsStr.split(',');
        nameRole[name] = role;
        nameSkills[name] = skills;
    }

    let index = members;
    let command = information[index];

    while (command !== 'End') {
        let [action, name, arg1, arg2] = command.split(' / ');

        if (action === 'Perform') {
            let role = arg1;
            let skill = arg2;

            if (nameRole[name] === role && nameSkills[name].includes(skill)) {
                console.log(`${name} has successfully performed the skill: ${skill}!`);
            } else {
                console.log(`${name} cannot perform the skill: ${skill}.`);
            }

        } else if (action === 'Reassign') {
            let newRole = arg1;
            nameRole[name] = newRole;
            console.log(`${name} has been reassigned to: ${newRole}`);

        } else if (action === 'Learn Skill') {
            let newSkill = arg1;
            if (nameSkills[name].includes(newSkill)) {
                console.log(`${name} already knows the skill: ${newSkill}.`);
            } else {
                nameSkills[name].push(newSkill);
                console.log(`${name} has learned a new skill: ${newSkill}.`);
            }
        }

        index++;
        command = information[index];
    }

    for (let name in nameRole) {
        let role = nameRole[name];
        let sortedSkills = nameSkills[name].sort((a, b) => a.localeCompare(b));
        console.log(`Guild Member: ${name}, Role: ${role}, Skills: ${sortedSkills.join(', ')}`);
    }
}



solve([
        "3",
        "Arthur warrior swordsmanship,shield",
        "Merlin mage fireball,teleport",
        "Gwen healer healing,alchemy",
        "Perform / Arthur / warrior / swordsmanship",
        "Perform / Merlin / warrior / fireball",
        "Learn Skill / Gwen / purification",
        "Perform / Gwen / healer / purification",
        "Reassign / Merlin / healer",
        "Perform / Merlin / healer / teleport",
        "End"
    ]
)