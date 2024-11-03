const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addTask = functions.https.onCall((data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
        "failed-precondition",
        "The function must be called while authenticated.",
    );
  }

  const {taskId, userId} = data;
  return admin.firestore()
      .collection("todos")
      .doc(userId)
      .collection("tasks")
      .doc(taskId)
      .update({reminder: true})
      .then(() => {
        return {message: "Reminder set successfully."};
      })
      .catch((error) => {
        throw new functions.https.HttpsError(
            "unknown",
            error.message,
            error,
        );
      });
});
