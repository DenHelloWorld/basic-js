function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const filteredMembers = members
    .filter((member) => typeof member === "string")
    .map((member) => member.trim());
  const firstLetters = filteredMembers
    .map((member) => member[0].toUpperCase())
    .sort();
  return firstLetters.join("");
}

module.exports = {
  createDreamTeam,
};
