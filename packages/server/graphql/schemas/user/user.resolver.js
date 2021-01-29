import { SYS_ADMIN, SYS_MOD, USER } from '../../enums/userRoles';
import { U_ACTIVE, U_BANNED } from '../../enums/userStatus';
import { countTicketOfUser } from '../../../models/ticket';
import { MetaMask, Revollet, TrustWallet } from '../../enums/walletProvider';

export default {
  User: {
    full_name: user =>
      user.first_name && user.last_name
        ? user.first_name + ' ' + user.last_name
        : user.email,
    tickets_owned: async payload => await countTicketOfUser(payload.uid)
  },
  UserRole: {
    ADMIN: SYS_ADMIN,
    MOD: SYS_MOD,
    USER: USER
  },
  UserStatus: {
    ACTIVE: U_ACTIVE,
    BANNED: U_BANNED
  },
  UpdateStatusAction: {
    BAN: U_BANNED,
    UNBAN: U_ACTIVE
  },
  WalletProvider: {
    MetaMask,
    Revollet,
    TrustWallet
  }
};
