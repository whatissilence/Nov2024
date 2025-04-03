import '../css/UserStatus.css';

export default function UserStatus({online}: {online: boolean}) {
  return (
    <div className={'online-sign ' + (online ? 'active' : 'inactive')}></div>
  )
}