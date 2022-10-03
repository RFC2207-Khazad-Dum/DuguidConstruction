import Head from 'next/head';
import JobsList from '../components/JobsList';
import jobControllers from '.././pages/api/controllers/jobs';

const employeePortal = function() {
  jobControllers.newJob();
  return (
    <div>
      <Head>
        <title>Employee Portal</title>
      </Head>
      <h1 id='employeePortalHeader'>Employee Portal</h1>
      <JobsList />
      <div className='employeePortalView'>
        <div id='jobBoard'>Job Board</div>
        <div className='employeeToolsAndHours'>
          <div id='toolInventory'>Tool Inventory</div>
          <div id='employeeHours'>Employee Hours</div>
        </div>
      </div>
    </div>
  );
};

export default employeePortal;