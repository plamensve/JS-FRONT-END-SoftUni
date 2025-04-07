function manageAstronauts(information) {
    let astronauts_count = Number(information.shift());

    let astronaut_info = [];
    for (let i = 0; i < astronauts_count; i++) {
        astronaut_info.push(information[i]);
    }

    let allInfo = [];
    for (let astroInfo of astronaut_info) {
        let [astronautName, spaceCraftSection, skills] = astroInfo.split(' ');
        allInfo.push({
            name: astronautName,
            section: spaceCraftSection,
            skills: skills.split(','),
        });
    }

    action(allInfo, information.splice(astronauts_count));

    function action(obj, commands) {
        for (let command of commands) {
            if (command === 'End') {
                break;
            }

            let [action, name, section, cur_command] = command.split(' / ');
            let current_obj = findObj(obj, name);

            if (action === 'Learn Skill') {
                if (obj[current_obj].skills.includes(section)) {
                    console.log(`${name} already knows the skill: ${section}.`);
                } else {
                    obj[current_obj].skills.push(section);
                    console.log(`${name} has learned a new skill: ${section}.`);
                }
            } else if (action === 'Transfer') {
                obj[current_obj].section = section;
                console.log(`${name} has been transferred to: ${section}`);
            } else if (action === 'Perform') {
                if (
                    obj[current_obj].section === section &&
                    obj[current_obj].skills.includes(cur_command)
                ) {
                    console.log(`${name} has successfully performed the skill: ${cur_command}!`);
                } else {
                    console.log(`${name} cannot perform the skill: ${cur_command}.`);
                }
            }
        }

        for (let x of obj) {
            let orderedSkills = x.skills.slice().sort();
            console.log(
                `Astronaut: ${x.name}, Section: ${x.section}, Skills: ${orderedSkills.join(', ')}`
            );
        }
    }

    function findObj(obj, name) {
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].name === name) {
                return i;
            }
        }
    }
}


console.log()