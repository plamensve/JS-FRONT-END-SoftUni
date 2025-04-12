function solve(input) {
    let n = Number(input.shift());
    let members = {};

    for (let i = 0; i < n; i++) {
        let [name, role, skillsStr] = input[i].split(' ');
        let skills = skillsStr.split(',');
        members[name] = {
            role: role,
            skills: skills
        };
    }

    input = input.slice(n);

    for (let line of input) {
        if (line === 'End') break;

        let [command, name, arg1, arg2] = line.split(' / ');

        if (command === 'Perform') {
            let role = arg1;
            let skill = arg2;

            if (members[name].role === role && members[name].skills.includes(skill)) {
                console.log(`${name} has successfully performed the skill: ${skill}!`);
            } else {
                console.log(`${name} cannot perform the skill: ${skill}.`);
            }

        } else if (command === 'Reassign') {
            let newRole = arg1;
            members[name].role = newRole;
            console.log(`${name} has been reassigned to: ${newRole}`);

        } else if (command === 'Learn Skill') {
            let newSkill = arg1;

            if (members[name].skills.includes(newSkill)) {
                console.log(`${name} already knows the skill: ${newSkill}.`);
            } else {
                members[name].skills.push(newSkill);
                console.log(`${name} has learned a new skill: ${newSkill}.`);
            }
        }
    }

    for (let name in members) {
        let role = members[name].role;
        let skills = members[name].skills.sort((a, b) => a.localeCompare(b));
        console.log(`Guild Member: ${name}, Role: ${role}, Skills: ${skills.join(', ')}`);
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