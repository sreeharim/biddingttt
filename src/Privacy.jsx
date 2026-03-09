import React from 'react';

export default function Privacy() {
    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', color: '#ccc', textAlign: 'left' }}>
            <h1 style={{ color: '#00f0ff' }}>Privacy Policy</h1>
            <p><strong>Last updated:</strong> March 9, 2026</p>

            <p>This Privacy Policy applies to the <strong>Bidding Tic-Tac-Toe</strong> mobile application ("App") and its associated services.</p>

            <h2 style={{ color: '#00f0ff', marginTop: '2rem' }}>1. Information We Collect</h2>
            <p>Bidding Tic-Tac-Toe is designed with your privacy in mind. We collect minimal information strictly necessary to facilitate multiplayer online gameplay.</p>
            <ul>
                <li><strong>Nicknames:</strong> You may choose a Nickname to represent yourself in multiplayer games. This name is temporarily shared with players in your private game room.</li>
                <li><strong>Avatars:</strong> You may select an in-app Avatar. This selection is temporarily shared during gameplay.</li>
                <li><strong>Game State:</strong> Move data, bids, and current coins are temporarily stored in real-time on our servers (Firebase/Firestore) solely to facilitate the active match between you and your opponent.</li>
            </ul>

            <h2 style={{ color: '#00f0ff', marginTop: '2rem' }}>2. How We Use Information</h2>
            <p>The information collected is used exclusively for the following purposes:</p>
            <ul>
                <li>To match you with other players via private Room Codes.</li>
                <li>To synchronize game state (bids, coin balances, and moves) between devices in real-time.</li>
            </ul>
            <p>We do <strong>not</strong> use your information for marketing, profiling, or tracking. Nicknames and session data are ephemeral and are not permanently archived.</p>

            <h2 style={{ color: '#00f0ff', marginTop: '2rem' }}>3. Third-Party Services</h2>
            <p>The App uses third-party services that may collect information used to identify you, specifically for network data synchronization and error reporting:</p>
            <ul>
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" style={{ color: '#bb86fc' }}>Google Play Services</a></li>
                <li><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer" style={{ color: '#bb86fc' }}>Google Analytics for Firebase</a> (for crash reporting and basic telemetry)</li>
                <li><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer" style={{ color: '#bb86fc' }}>Firebase Firestore</a> (for real-time database synchronization)</li>
            </ul>

            <h2 style={{ color: '#00f0ff', marginTop: '2rem' }}>4. Data Retention and Deletion</h2>
            <p>Active game session data (Room Codes, participant nicknames, and current game states) is stored in Firebase Firestore and expires shortly after the session concludes or becomes inactive. You do not need an account to play, and therefore there is no long-term persistent account data to delete.</p>

            <h2 style={{ color: '#00f0ff', marginTop: '2rem' }}>5. Children's Privacy</h2>
            <p>Our App is safe for all ages, including children under the age of 13. We do not knowingly collect personally identifiable information from anyone. If you are a parent or guardian and you believe your child has provided us with personal information (such as using a real name as a Nickname), you can instruct them to clear the app data or change the Nickname in the app settings.</p>

            <h2 style={{ color: '#00f0ff', marginTop: '2rem' }}>6. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted.</p>
        </div>
    );
}
