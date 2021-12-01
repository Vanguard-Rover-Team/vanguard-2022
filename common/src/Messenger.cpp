#include "Messenger.hpp"

namespace common {
    Messenger::Messenger(Message::MessageCase incomingMessageCase) :
    incomingMessageCase(incomingMessageCase), zmqContext(), socket(zmqContext, zmq::socket_type::dealer) {
        socket.setsockopt(ZMQ_IDENTITY, incomingMessageCase);
        socket.connect("ipc://broker.ipc");
    };

    void Messenger::sendMessage(const Message& message) {
        zmq::message_t zmqMessage(sizeof(Message::MessageCase));
        *static_cast<Message::MessageCase *>(zmqMessage.data()) = message.message_case();
        socket.send(zmqMessage, zmq::send_flags::sndmore);

        zmqMessage.rebuild(message.ByteSizeLong());
        message.SerializeToArray(zmqMessage.data(), zmqMessage.size());
        socket.send(zmqMessage);
    }

    bool Messenger::receiveMessage(Message& message) {
        zmq::message_t zmqMessage;
        if (socket.recv(zmqMessage, zmq::recv_flags::dontwait)) {
            message.ParseFromArray(zmqMessage.data(), zmqMessage.size());
            return true;
        } else {
            return false;
        }
    }

}