import db from '../../../utils/database/db';
import { Jobs } from '../../../utils/database/models';

const jobControllers = {
  // Create a new job
  newJob: async function() {
    await db();
  },

  // Edit a job

  // Find all jobs

  // Find jobs published by a specific user

  // Find jobs assigned to specific employee

  // Update job so employer can assign to specific employee

  // Update job to change status to completed
}

export default jobControllers;