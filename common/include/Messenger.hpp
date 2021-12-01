#include <zmq.hpp>
#include "message.pb.h"

namespace common {
    class Messenger {
        public:
        Messenger(Message::MessageCase incomingMessageCase);
        void sendMessage(const Message& message);
        bool receiveMessage(Message& message);

        private:
        Message::MessageCase incomingMessageCase;
        zmq::context_t zmqContext;
        zmq::socket_t socket;
    };
}